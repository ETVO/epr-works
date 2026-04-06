import '../styles/components/contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="section-title">
        Let's Work <span>Together</span>
      </h2>
      <p>
        <strong>My approach:</strong>
        <br />I don't overcomplicate things.
        <br />I listen to your problem, identify
        the root cause, and build solutions that last. You'll get clear
        communication, realistic timelines, and code you can maintain.
      </p>

      <div>
        Reach me on&nbsp;
        <a
          href="mailto:estevao.prolim@gmail.com"
          target="_blank"
          className="hover-underline"
        >
          estevao.prolim@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact
