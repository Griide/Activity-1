import './App.css'
import Profile from './components/Profile'
import ContactInformation from './components/ContactInformation'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <>
    <Profile 
    profileName = "Gian Mirandilla"
    profileDocs = "Ang Kupal na Estudyante sa BSIT"/>

    <ContactInformation
    Email = "gianmirandilla@gmail.com"
    Phone = "09123456789"
    Address = "Quirapi, Castilla Sorsogon" />
    
    <Skills 
    Skill1 = "C++"
    Skill2 = "HTML"
    Skill3 = "JavaScript"
    Skill4 = "React"/>

    <WorkExperience
    Work = "Software Developer at ABC Corporation"
    Date = "2020-2022"
    Text = "Creating the computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks"
    Work1 = "Backend Developer"
    Date1 = "2023 - Present"
    Text1 = "Developing the server-side logic, database integration, and API connectivity for the applications" />
    </>
  )
}

export default App
