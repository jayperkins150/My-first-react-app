import React from 'react'; 
import ProfileCard from './ProfileCard';
import VariableDisplay from './VariableDisplay';

const App = () => {
  const profiles = [
    {
      image: "https://i.postimg.cc/CM7ZJ6qy/d1f4dcc1-0e03-4fe7-b08d-b4f1c6de35b2.jpg",
      name: "Jay Perkins",
      jobTitle: "Graphic Web Designer",
      bio: "Creating intuitive and stylish websites and user interfaces is what I do. In my work I combine my Front End Web Developer skills with over a decade of Graphic Design experience",
    },
  ];

  return (
    <div className="App">
      <VariableDisplay/>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          image={profile.image}
          name={profile.name}
          jobTitle={profile.jobTitle}
          bio={profile.bio}
        />
      ))}
    </div>
  );
};

export default App;
