import React, { useEffect, useRef, useState } from 'react';
import cv from '../../services/cv';

const maxVideoSize = 200;

function OpenCV() {
  const [processing, updateProcessing] = useState(false);
  const videoElement = useRef<HTMLVideoElement | null>(null);
  const canvasEl = useRef<HTMLCanvasElement | null>(null);

  async function onClick() {
    updateProcessing(true);

    const ctx = (canvasEl.current as HTMLCanvasElement).getContext('2d') as CanvasRenderingContext2D;
    ctx.drawImage(videoElement.current as HTMLVideoElement, 0, 0, maxVideoSize, maxVideoSize);
    const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);
    await cv.load();
    const processedImage = await cv.imageProcessing(image);
    ctx.putImageData(processedImage.data.payload, 0, 0);
    updateProcessing(false);
  }

  useEffect(() => {
    async function initCamara(): Promise<any> {
      (videoElement.current as HTMLVideoElement).width = maxVideoSize;
      (videoElement.current as HTMLVideoElement).height = maxVideoSize;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: 'user',
            width: maxVideoSize,
            height: maxVideoSize,
          },
        });
        (videoElement.current as HTMLVideoElement).srcObject = stream;

        return new Promise(resolve => {
          (videoElement.current as HTMLVideoElement).onloadedmetadata = () => {
            resolve(videoElement.current);
          };
        });
      }
      const errorMessage = 'This browser does not support video capture, or this device does not have a camera';
      alert(errorMessage);
      return Promise.reject(errorMessage);
    }

    async function load() {
      const videoLoaded = await initCamara();
      videoLoaded.play();
      return videoLoaded;
    }

    load();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <video className='video' playsInline ref={videoElement} />
      <button disabled={processing} style={{ width: maxVideoSize, padding: 10 }} onClick={onClick}>
        {processing ? 'Processing...' : 'Take a photo'}
      </button>
      <canvas ref={canvasEl} width={maxVideoSize} height={maxVideoSize}></canvas>
    </div>
  );
}

export default OpenCV;
