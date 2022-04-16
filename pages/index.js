import Unity, { UnityContext } from "react-unity-webgl";

export default function Home() {
  const unityContext = new UnityContext({
    loaderUrl: "./Build/TableTopRPG.loader.js",
    dataUrl: "./Build/TableTopRPG.data",
    frameworkUrl: "./Build/TableTopRPG.framework.js",
    codeUrl: "./Build/TableTopRPG.wasm",
  });
  return (
    <>
      <Unity unityContext={unityContext} style={{width: 480, height: 320}}/>
      <button onClick={()=>{unityContext.setFullscreen(true)}}>FullScreen</button>
    </>
  );
}
