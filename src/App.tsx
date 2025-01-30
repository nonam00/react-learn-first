import './App.css'
import Title from "./Title.tsx";
import Input from "./Input.tsx";
import {useState} from "react";

function App() {
  const [title, setTitle] = useState<string>('Default title');
  const [color, setColor] = useState<string>('#888');

  return (
    <div>
      <Title color={color != '' ? color : '#888'}>
        {title != '' ? title : 'Default title'}
      </Title>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  )
}

export default App
