import '../Team/teams.css';
import teamImage from '../../assets/teams-image.png';

const Teams = () => {
  const teamsData = [
    {
      nama: 'Muhamad Emir Alfani',
      jabatan: 'Software Developer',
    },
    {
      nama: 'Aisyah Putri',
      jabatan: 'UI/UX Designer',
    },
    {
      nama: 'Budi Santoso',
      jabatan: 'Project Manager',
    },
    {
      nama: 'Siti Nurhaliza',
      jabatan: 'Marketing Specialist',
    },
    {
      nama: 'Ahmad Fauzan',
      jabatan: 'Data Scientist',
    },
    {
      nama: 'Ahmad Fauzan',
      jabatan: 'Data Scientist',
    },
    {
      nama: 'Ahmad Fauzan',
      jabatan: 'Data Scientist',
    },
    {
      nama: 'Ahmad Fauzan',
      jabatan: 'Data Scientist',
    },
  ];

  return (
    <div className='teams-container'>
      <div className='teams-title'>
        <ul>
          \ <a href=''>Team</a> \
        </ul>
        <h1>Our Leaders</h1>
      </div>
      <div className='teams-card-container'>
        {teamsData.map((team, index) => (
          <div className='teams-card' key={index}>
            <img src={teamImage} alt='' />
            <h3>{team.nama}</h3>
            <p>{team.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
