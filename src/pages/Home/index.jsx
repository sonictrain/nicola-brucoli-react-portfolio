import Signature from '../../components/Signature'

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
      <p className="mb-5">Back in 2018, I decided to challenge myself and try my hand at developing functional prototypes of my interfaces and finished into the rabbit hole of coding and web development.
      Fast-forward to today, I've had the privilege of building software interfaces for startups, a university research projects, and tech companies from the aviation industry.</p>

      <p className="mb-5">My main focus these days is building products and leading the software development for our clients at Weave Intelligence.
      I most enjoy working with new technology building software which is done right - exactly in the sweet spot where design and engineering meet - you know, things that look good but are also done properly under the hood.</p>

      <p>When I'm not out there saving the digital world, you'll find me leveling up my skills because, hey, why not? You ask me something new? No problem at all, can do!</p>
      </div>
      <Signature/>
    </div>
  );
}

export default Home;