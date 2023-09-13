import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="flex-container">

      <div className="card contact-card">
  
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="images/github-mark.png" alt="Github logo"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Github</p>
      </div>
      <a href="https://github.com/Flying-S-Ranch" class="button is-info">Visit my Github profile</a>
    </div>
  </div>
</div>
<div className="card contact-card">
  
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="images/github-mark.png" alt="Github logo"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">LinkedIn</p>
      </div>
      <a href="https://github.com/Flying-S-Ranch" class="button is-info">Visit my Github profile</a>
    </div>
  </div>
  
</div>
<div className="card contact-card">
  
  <div className="card-content">
    <div className="media contact-card">
      <div className="media-content social-media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="images/github-mark.png" alt="Github logo"/>
          </figure>
        </div>
        <p className="title is-4">Email</p>
      </div>
      <a href="https://github.com/Flying-S-Ranch" className="button is-info social-button">Visit my Github profile</a>
    </div>
  </div>
  
</div>
      </div>
      <a href="https://www.linkedin.com/in/samantha-shrauner/" class="button">Visit my LinkedIn profile</a>
      <a href="mailto:samleashrauner@gmail.com" class="button">Get in Touch by Email</a>
    </div>
  )
}