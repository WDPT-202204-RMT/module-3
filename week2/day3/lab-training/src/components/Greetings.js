export default function Greetings(props) {
  const { lang, children } = props;

  const greet = () => {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        break;
    }
  };

  return (
    <div style={{ border: '1px solid black' }}>
      {greet()} {children}
    </div>
  );
}
