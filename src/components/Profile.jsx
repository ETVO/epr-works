import '../styles/components/profile.scss'

function Profile() {
  return (
    <div className="profile">
      <div className="flex flex-col gap-6 items-center text-center">
        <img
          className="profile-photo w-40 h-40"
          src="./Estevão-Pereira-Rolim.jpg"
          alt="Photo of Estevão"
        />
        <h1 className="text-2xl font-bold mb-2">Estevão Pereira Rolim</h1>
        <p className="text-sm mb-5">
          Full Stack Developer, expert in modernizing systems and collaborating
          in cross-functional teams.
        </p>

        <div className="text-sm">
          <a href="mailto:estevao.prolim@gmail.com" target="_blank">
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
    </div>
  )
}

export default Profile
