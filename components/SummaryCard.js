
const SummaryCard = ({ title, value }) => {
    return (
      <div style={{
        border: '2px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
        margin: '0.5rem',
        textAlign: 'center',
        flex: 1,
        flexDirection:'column',
        display:'flex',
      }}>
        <h3>{title}</h3>
        <p style={{fontSize: '2rem', fontWeight: 'bold', marginTop: 'auto' }}>{value}</p>
      </div>
    );
  };
  
  export default SummaryCard;
  