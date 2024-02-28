import React from 'react'
import { View, Text } from 'react-native'

const data = [
    { id: 'a', name: 'Devin' },
    { id: 'b', name: 'Gabe' },
    { id: 'c', name: 'Kim' },
  ]

export function ListPerso() {
  return (
    <View>
      {data.map((item, index) => (
        <Text key={index.toString()}>{item.name}</Text>
      ))}
    </View>
  )
}

<View>
  <Text key="0">Devin</Text>
  <Text key="1">Gabe</Text>
  <Text key="2">Kim</Text>
</View>

export default function ThreeScreen(){
  const inputRef = useRef();
  const[isFormValidated, setFormValidation] = useState(false);
  const[items, dispatch] = useReducer((state: string[], action: { type: string, payload?: string, index?: number}) =>{
    switch(action.type){
      case'add':
      state.push(action.payload?? ''); return state;
      case'remove':
       return state.filter((_, index) =>index!= action.index);
      default:
        return state;
      }
    }, []);
    function handleSubmit(e: any) {
      e.preventDefault(); dispatch( {type:'add', payload:inputRef.current?.value});
      inputRef.current!.value= ''; setFormValidation(!isFormValidated);
    }
    return(
    <>
    <form onSubmit={handleSubmit}>
      <input ref={inputRef}/>
      </form>
      <ul>{items.map((item,index)=>(
        <li key={index}>
          {item}<button onClick={()=>dispatch({type:'remove',index})}>X</button>
          </li>))}
          </ul>
          </>
          );
        }
  