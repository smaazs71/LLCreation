import { Catalogue, Hero } from '../components'

const HomePage = ({searchParams}: any) => {

  console.log('searchParams in home: ');
  console.log(searchParams.a);
  return (
    <div>
      <Hero />
      <Catalogue />

    </div>    
)

}

export default HomePage