import Inputexample from "../component/Inputexample";
 import Changebutton from "../component/Changebutton";
 import Todo from "../component/Todo";
 import Yawts from "../component/Yawts";
 
 function App() {
   const [count, setCount] = useState(0);
 
   return (
     <>
       <div className="container">
         <Todo />
         <Yawts />
       </div>
     </>
   );
 }
 
 export default App;
