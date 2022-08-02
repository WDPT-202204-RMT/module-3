import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/master-card.svg';

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const getLogo = () => {
    if (type === 'Visa') return visa;
    if (type === 'Master Card') return mastercard;
  };

  const getCardNumber = () => {
    let res = '';
    for (let index = 0; index < number.length; index++) {
      if (index < number.length - 4) {
        res += '#';
      } else {
        res += number[index];
      }
    }
    return res;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: bgColor,
        color,
        width: 'auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img
          src={getLogo()}
          alt={type}
          style={{ width: '4rem', height: 'auto' }}
        />
      </div>
      <div>
        <p>{getCardNumber()}</p>
      </div>
      <div>
        <p>
          Expires {expirationMonth}/{expirationYear}
          {'   '}
          {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}
