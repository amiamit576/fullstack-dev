import './Video.css';

function Video({ title, channel = "Coder Dost", views, time,verified,children }) {
  
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="http://placeimg.com/160/90/3" alt="Katherine Johnson" />
      </div>
        <div className="title">{title}</div>
      {/* short circuiting */}
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
        </div>
        <div>{children }</div>
      </div>
      </>
  );
}

export default Video;
