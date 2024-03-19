// Bir üst bileşenden gönderilen verilere erişmek istiyorsak
// Bileşenin fonksiyonun parametre kısmından verilere erişebiliriz

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} />

      <div className="body">
        <h4 className="category">{props.category}</h4>

        <h3>{props.title} </h3>
      </div>
    </div>
  );
};

export default Card;
