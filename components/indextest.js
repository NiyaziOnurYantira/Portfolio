import { useState, useEffect } from 'react';
import { ipRights } from '../data/ipRights';
import StatusPieChart from '../components/StatusPieChart';
import DataDisplay from '../components/DataDisplay';
import SummaryCard from '../components/SummaryCard';
import PatentFilingLineChart from '../components/PatentFilingLineChart';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionData = sessionStorage.getItem('ipRights');
      if (sessionData) {
        try {
          setData(JSON.parse(sessionData));
        } catch (error) {
          console.error('Invalid JSON data. Resetting data.', error);
          sessionStorage.removeItem('ipRights');
          sessionStorage.setItem('ipRights', JSON.stringify(ipRights));
          setData(ipRights);
        }
      } else {
        sessionStorage.setItem('ipRights', JSON.stringify(ipRights));
        setData(ipRights);
      }
    }
  }, []);

  if (!data) return <div>Loading...</div>;

  const totalPatents = data.patents.length;
  const totalTrademarks = data.trademarks.length;
  const totalCopyrights = data.copyrights.length;
  const totalTradeSecrets = data.tradesecrets.length;
  const totalIndustrialDesigns = data.industrialDesigns.length;
  const totalGeographicalIndications = data.geographicalIndications.length;
  const totalSoftwareLicenses = data.softwareLicenses.length;
  const totalDomainNames = data.domainNames.length;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1  style={{textAlign: 'center', fontSize: '30px'}}>Dashboard</h1>
      
      {/* Summary cards */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <SummaryCard title="Number of Patents" value={totalPatents} />
        <SummaryCard title="Number of Brands" value={totalTrademarks} />
        <SummaryCard title="Number of Copyrights" value={totalCopyrights} />
        <SummaryCard title="Number of TradeSecrets" value={totalTradeSecrets} />
        <SummaryCard title="Number of Industrial Designs" value={totalIndustrialDesigns} />
        <SummaryCard title="Number of Geographical Indications" value={totalGeographicalIndications} />
        <SummaryCard title="Number of Software Licenses" value={totalSoftwareLicenses} />
        <SummaryCard title="Number of Domain Names" value={totalDomainNames} />
      </div>

      {/* Pie Chart */}
      <StatusPieChart data={data} />
      
      {/* Line chart */}
      {data.patents && data.patents.length > 0 && (
        <PatentFilingLineChart patents={data.patents} />
      )}
      
      {/* Data Display */}
      <DataDisplay />
    </div>
  );
}
