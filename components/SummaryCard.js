
const SummaryCard = ({ title, value }) => {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '1rem',
        margin: '0.5rem',
        textAlign: 'center',
        flex: 1
      }}>
        <h3>{title}</h3>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{value}</p>
      </div>
    );
  };
  
  export default SummaryCard;
  