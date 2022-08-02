export default function Rating(props) {
  const { children } = props;

  const score = Math.floor(children[0]);

  const generateStars = () => {
    const res = [];

    for (let i = 0; i < 5; i++) {
      if (i > score) res.push('☆');
      else res.push('★');
    }
    return res;
  };
  return <div>{generateStars()}</div>;
}
