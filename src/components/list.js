const list = ({info}) => {
    return (
      <div>
        {info.map((info) => (
          <div className="blog-preview" key={info.id}>
              <h2>{info.username}</h2>
              <p>Written by {info.firstname}</p>
          </div>
        ))}
      </div>
    );
}
 
export default list;