import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import videos from './data/data'

function App() {
  
   return (
    <div className="App" onClick={()=>console.log("hello")}>
      <div>Videos</div>
      {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          
        >
          <PlayButton onPlay={() => console.log("play",video.title)} onPause={() => console.log("pause",video.title)}>{video.title }</PlayButton>
        </Video>)
       }
       <div style={{ clear: 'both' }}>
         {/* <PlayButton message="Play-message" onPlay={()=>console.log("play")} onPause={()=>console.log("pause")}>Play</PlayButton> */}
         {/* <PlayButton message="pause-message" onSmash={()=>alert("pause")}>Pause</PlayButton> */}
         
       </div>
    
    </div>
  );
}

export default App;
