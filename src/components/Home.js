import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="row">
        {/* Card 1 start */}
        <div className="col s12 m6 l3 ">
          <div className="card grey darken-3">
            <div className="card-image">
              <img src="logo512.png" alt="card1" />

            </div>
            <div className="card-content">
              <p>
                ReactJS is JavaScript library used for building reusable UI components. According to React official documentation.
              </p>
            </div>
            <div className="card-action">
              <Link to="/reactjs">
                <h3> ReactJs Bootcamp</h3>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 1 end */}
        {/* Card 2 start */}
        <div className="col s12 m6 l3">
          <div className="card grey darken-3">
            <div className="card-image">
              <img src="nodejs.png" alt="card2" />

            </div>
            <div className="card-content">
              <p>
                Node is useful for developing applications that require a persistent connection from the browser to the server .
              </p>
            </div>
            <div className="card-action">
              <Link to="/nodejs">
                <h3> Nodejs course</h3>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 end */}
        {/* Card 3 start */}
        <div className="col s12 m6 l3">
          <div className="card grey darken-3">
            <div className="card-image">
              <img src="nextjs.png" alt="card2" />

            </div>
            <div className="card-content">
              <p>
                Next. js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.
              </p>
            </div>
            <div className="card-action">
              <Link to="/nextjs">
                <h3> Learn NextJs</h3>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 3 end */}
      </div>
    </div>
  );
}

export default Home;
