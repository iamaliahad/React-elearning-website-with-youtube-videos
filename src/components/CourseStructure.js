import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'
import course from '../courses/Data';

function CourseStructure() {
  let params = useParams();
  const courseName = params.coursename;

  const [vid, uid] = useState(course[courseName][0].vid);
  const [title, utit] = useState(course[courseName][0].vid);
  const [counter, setCounter] = useState(0)
  const watched = (vid) => {
    if (localStorage.getItem("saveID")) {
      if (JSON.parse(localStorage.getItem("saveID")).includes(vid)) {
        return true
      }
    }
    return false
  }
  const renderVideo = () => {
    return (
      <>

        <div className="video-container">

          <ReactPlayer
            className='react-player'
            url={`https://www.youtube.com/watch?v=${vid}`}
            width='100%'
            height='100%'
            controls={true}
            onEnded={
              () => {
                if (localStorage.getItem("saveID")) {
                  let data = JSON.parse(localStorage.getItem("saveID"))
                  localStorage.setItem("saveID", JSON.stringify([...data, vid]))

                } else {
                  localStorage.setItem("saveID", JSON.stringify([vid]))
                }
              }
            }
          />
        </div>
      </>
    );
  };

  return (
    <div className="row">
      <div class="col s12 m8 l9">{renderVideo()}</div>

      <div class="col s12 m4 l3">
        <ul className="collection">
          {course[courseName].map((item, index) => {
            return (
              <li
                key={index}

                className={counter === index ? "collection-item myitem" : "collection-item grey darken-4"}
                onClick={() => {
                  utit(item.title);
                  setCounter(index)
                  uid(item.vid);
                }}
              >
                {item.title}
                {
                  watched(item.vid) && <i className="material-icons">check</i>
                }

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CourseStructure;
