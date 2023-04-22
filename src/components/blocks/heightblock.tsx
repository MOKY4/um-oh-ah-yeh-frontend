interface Props {
  height: string;
}

const HeightBox = (props: Props) => {
  return <div style={{ height: props.height }}></div>;
};

export default HeightBox;
