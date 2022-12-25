# **Using TypeScript with React**

## For props
Below are the possible ways for defining a functional component with props and defining the type of props
```javascript
function Heading(props: { title: string }) {
  return <div className="text-2xl font-bold">{props.title}</div>;
}

//Destructuring props
function Heading2({ title }: { title: string }) {
  return <div className="text-xl font-bold">{title}</div>;
}

//For children we use ReactNode
const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-blud">{children}</div>;
};

const Container2: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => {
  return (
    <div>
      {items.map((elem, idx) => (
        <li key={idx} onClick={() => onClick?.(elem)}>
          {elem}
        </li>
      ))}
    </div>
  );
};
```