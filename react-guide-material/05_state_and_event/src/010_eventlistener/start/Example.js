const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  };
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  };

  const hello = () => {
    return 'hello react';
  };
  console.log(hello());
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {hello}
    </>
  );
};

export default Example;
