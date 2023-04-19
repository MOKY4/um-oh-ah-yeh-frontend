interface Props {
  width: string;
}

const WidthBox = (props: Props) => {
  return <div style={{ width: props.width }}></div>;
};

export default WidthBox;
