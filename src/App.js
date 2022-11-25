import './App.css'; 
import Customer from './components/Customer'

const customers = [{
  id : 1,
  image : 'https://placeimg.com/64/64/1',
  name :'김태완',
  birthday : 961222,
  gender : "남자",
  job: '대학생',
},
{
  id : 2,
  image : 'https://placeimg.com/64/64/2',
  name :'바보',
  birthday : 880101,
  gender : "고자",
  job: '취준생',
},
{
  id : 3,
  image : 'https://placeimg.com/64/64/3',
  name :'천재',
  birthday : 911223,
  gender : "여자",
  job: '네이버개발자',
}
];

function App() {
  return (
    <>
    {
      customers.map( c => (
      <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}></Customer>
      ))
    }
    </>
  );
}

export default App;
