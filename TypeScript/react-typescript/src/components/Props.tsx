import React from "react";

function Heading(props: { title: string }) {
  return <div className="text-2xl font-bold">{props.title}</div>;
}

function Heading2({ title }: { title: string }) {
  return <div className="text-xl font-bold">{title}</div>;
}

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

function Props() {
  return (
    <div className="ml-10">
      <Heading title="Heading" />
      <Heading2 title="Heading2" />
      <Container>
        <p>hello</p>
      </Container>

      <Container2>
        <p>Hello from Container2</p>
      </Container2>

      <List
        items={["item1", "item2"]}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </div>
  );
}

export default Props;
