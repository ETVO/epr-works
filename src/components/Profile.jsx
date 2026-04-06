import '../styles/components/profile.scss'

function Profile() {
  return (
    <div className="profile">
      <img
        className="profile-photo w-40 h-40 mb-5"
        src="./Estevão-Pereira-Rolim.jpg"
        alt="Photo of Estevão"
      />
      <h1 className="text-2xl font-bold mb-4">Estevão Pereira Rolim</h1>
      <p className="text-sm mb-8">
        Full Stack Developer invested in results that last.
      </p>

      <div className="text-sm mb-4">
        <a href="mailto:estevao.prolim@gmail.com" target="_blank" className='hover-underline'>
          estevao.prolim@gmail.com
        </a>
      </div>

      <div className="links">
        <a
          href="https://github.com/ETVO/"
          target="_blank"
          className="bi bi-github"
          title="GitHub"
        ></a>
        <a
          href="https://linkedin.com/in/estevaoprolim"
          target="_blank"
          className="bi bi-linkedin"
          title="Linkedin"
        ></a>
      </div>
    </div>
  )
}

export default Profile
