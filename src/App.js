import Calculator from './Calculator';

export const Btn = ({ value, onselect, style }) => {
  return (
    <div className="col-4">
      <button className={style}
        onClick={onselect}
        value={value}
      >{value}</button>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Calculator />
    </div>
  );
}

export default App;
