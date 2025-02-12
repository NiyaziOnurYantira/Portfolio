// data/ipRights.js
export const ipRights = {
    patents: [
      {
        id: "PAT001",
        title: "Method for Quantum Computing Optimization",
        filingDate: "2024-01-15",
        grantDate: "2024-08-20",
        inventors: ["Dr. Sarah Chen", "Dr. James Wilson"],
        status: "granted",
        patentNumber: "US10234567",
        registrationOffice: "USPTO",
        examinerID: "EX789012",
        priorArt: ["US9876543", "EP1234567"],
        citations: ["IEEE-QC-2023-156", "Nature-QC-2023-789"],
        relatedApplications: ["PCT/US24/12345"]
      },
      {
        id: "PAT002",
        title: "Neural Network Architecture for AI Processing",
        filingDate: "2024-02-20",
        grantDate: "2024-09-15",
        inventors: ["Dr. Robert Chang", "Dr. Lisa Mueller"],
        status: "granted",
        patentNumber: "US10234568",
        registrationOffice: "USPTO",
        examinerID: "EX789013",
        priorArt: ["US9876544", "EP1234568"],
        citations: ["ArXiv-2023-789", "Nature-AI-2023-123"],
        relatedApplications: ["PCT/US24/12346"]
      },
      {
        id: "PAT003",
        title: "Blockchain Security Protocol",
        filingDate: "2024-03-10",
        grantDate: "2024-10-05",
        inventors: ["Dr. Mark Johnson", "Dr. Emma Davis"],
        status: "pending",
        patentNumber: "US10234569",
        registrationOffice: "USPTO",
        examinerID: "EX789014",
        priorArt: ["US9876545", "EP1234569"],
        citations: ["Crypto-2023-456", "IEEE-BC-2023-789"],
        relatedApplications: ["PCT/US24/12347"]
      }
    ],
    
    trademarks: [
      {
        id: "TM001",
        mark: "QuantumFlow",
        class: 9,
        goodsServices: "Computer software for quantum computing",
        firstUseDate: "2023-12-01",
        registrationNumber: "TM987654",
        jurisdiction: "European Union",
        ownershipHistory: ["QuantumTech Inc.", "QFlow Ltd."],
        similarMarks: ["QuantumLeap", "QuantumWave"],
        oppositions: ["OPP2024001"],
        renewalHistory: ["2024-01-15"]
      },
      {
        id: "TM002",
        mark: "NeuraPulse",
        class: 42,
        goodsServices: "AI-powered analytics services",
        firstUseDate: "2024-01-15",
        registrationNumber: "TM987655",
        jurisdiction: "United States",
        ownershipHistory: ["NeuraTech Inc."],
        similarMarks: ["NeuroPulse", "NeuraWave"],
        oppositions: ["OPP2024002"],
        renewalHistory: ["2024-02-20"]
      },
      {
        id: "TM003",
        mark: "CryptoShield",
        class: 36,
        goodsServices: "Blockchain security services",
        firstUseDate: "2024-02-01",
        registrationNumber: "TM987656",
        jurisdiction: "Global",
        ownershipHistory: ["BlockSec Ltd."],
        similarMarks: ["CryptoGuard", "BlockShield"],
        oppositions: ["OPP2024003"],
        renewalHistory: ["2024-03-10"]
      }
    ],
  
    copyrights: [
      {
        id: "CR001",
        workTitle: "Quantum Computing Architecture Documentation",
        type: "Literary Work",
        creationDate: "2024-02-01",
        registrationNumber: "TX9-876-543",
        authorshipType: "work for hire",
        depositCopy: "DC123456",
        derivativeWorks: ["Chinese Translation", "Academic Edition"],
        relatedRights: ["CR002", "CR003"],
        licensees: ["Global Education Ltd."]
      },
      {
        id: "CR002",
        workTitle: "Machine Learning Algorithms Handbook",
        type: "Literary Work",
        creationDate: "2024-03-15",
        registrationNumber: "TX9-876-544",
        authorshipType: "individual",
        depositCopy: "DC123457",
        derivativeWorks: ["Spanish Translation", "Digital Edition"],
        relatedRights: ["CR001", "CR003"],
        licensees: ["TechEdu Corp."]
      },
      {
        id: "CR004",
        workTitle: "Advanced Quantum Machine Learning",
        type: "Literary Work",
        creationDate: "2024-05-10",
        registrationNumber: "TX9-876-546",
        authorshipType: "individual",
        depositCopy: "DC123459",
        derivativeWorks: ["French Translation", "E-Book Edition"],
        relatedRights: ["CR001", "CR002"],
        licensees: ["QuantumEdu Ltd."]
      },
      {
        id: "CR003",
        workTitle: "Blockchain Implementation Guide",
        type: "Work of the Visual Arts",
        creationDate: "2024-04-01",
        registrationNumber: "TX9-876-545",
        authorshipType: "joint work",
        depositCopy: "DC123458",
        derivativeWorks: ["German Translation", "Professional Edition"],
        relatedRights: ["CR001", "CR002"],
        licensees: ["CryptoEdu Inc."]
      }
    ],
  
    tradesecrets: [
      {
        id: "TS001",
        secretName: "Quantum Error Correction Algorithm",
        category: "Technical Process",
        implementationDate: "2024-03-15",
        securityLevel: "Top Secret",
        accessControl: "Level 5",
        custodian: "Dr. Michael Brown",
        relatedNDAs: ["NDA2024001", "NDA2024002"],
        accessLog: ["2024-03-15", "2024-03-20"],
        securityAudits: ["AUD2024Q1"]
      },
      {
        id: "TS002",
        secretName: "Neural Network Training Optimization",
        category: "Algorithm",
        implementationDate: "2024-04-01",
        securityLevel: "Confidential",
        accessControl: "Level 4",
        custodian: "Dr. Sarah Williams",
        relatedNDAs: ["NDA2024003", "NDA2024004"],
        accessLog: ["2024-04-01", "2024-04-05"],
        securityAudits: ["AUD2024Q2"]
      },
      {
        id: "TS004",
        secretName: "Next-Gen AI Model Compression",
        category: "Algorithm",
        implementationDate: "2024-05-20",
        securityLevel: "Confidential",
        accessControl: "Level 3",
        custodian: "Dr. Laura Bennett",
        relatedNDAs: ["NDA2024007", "NDA2024008"],
        accessLog: ["2024-05-20", "2024-05-25"],
        securityAudits: ["AUD2024Q3"]
      },
      {
        id: "TS003",
        secretName: "Blockchain Consensus Protocol",
        category: "Protocol",
        implementationDate: "2024-04-15",
        securityLevel: "Secret",
        accessControl: "Level 4",
        custodian: "Dr. David Lee",
        relatedNDAs: ["NDA2024005", "NDA2024006"],
        accessLog: ["2024-04-15", "2024-04-20"],
        securityAudits: ["AUD2024Q2"]
      }
    ],
  
    industrialDesigns: [
      {
        id: "ID001",
        designName: "Quantum Processor Housing",
        componentType: "Hardware Enclosure",
        registrationDate: "2024-04-01",
        designNumber: "DM/123456",
        locarnoClass: "14-02",
        designerName: "Emma Rodriguez",
        productLines: ["QP-2024", "QP-2024-Pro"],
        similarDesigns: ["ID789012", "ID789013"],
        manufacturingPartners: ["TechFab Inc."]
      },
      {
        id: "ID004",
        designName: "Quantum Chipset Cooling System",
        componentType: "Thermal Management",
        registrationDate: "2024-05-15",
        designNumber: "DM/123459",
        locarnoClass: "14-04",
        designerName: "Ethan Wright",
        productLines: ["QC-COOL-2024", "QC-COOL-2024-Pro"],
        similarDesigns: ["ID789018", "ID789019"],
        manufacturingPartners: ["CoolTech Ltd."]
      },
      {
        id: "ID002",
        designName: "AI Server Rack Design",
        componentType: "Infrastructure",
        registrationDate: "2024-04-15",
        designNumber: "DM/123457",
        locarnoClass: "14-03",
        designerName: "Thomas Chen",
        productLines: ["AI-RACK-2024", "AI-RACK-2024-Enterprise"],
        similarDesigns: ["ID789014", "ID789015"],
        manufacturingPartners: ["ServerTech Ltd."]
      },
      {
        id: "ID003",
        designName: "Crypto Mining Rig Enclosure",
        componentType: "Hardware Housing",
        registrationDate: "2024-05-01",
        designNumber: "DM/123458",
        locarnoClass: "14-02",
        designerName: "Maria Garcia",
        productLines: ["CRYPTO-RIG-2024", "CRYPTO-RIG-2024-Pro"],
        similarDesigns: ["ID789016", "ID789017"],
        manufacturingPartners: ["MiningTech Inc."]
      }
    ],
  
    geographicalIndications: [
      {
        id: "GI001",
        indication: "Silicon Valley Quantum Technology",
        region: "California, USA",
        productCategory: "Computing Hardware",
        giRegistry: "US-GI-2024-001",
        certifyingBody: "Tech Origin Board",
        qualityStandards: "QS-2024-GI",
        producerAssociations: ["SVQA", "QTPA"],
        qualityReports: ["QR2024-Q1", "QR2024-Q2"],
        authorizedProducers: ["QuantumTech Inc.", "QFlow Systems"]
      },
      {
        id: "GI004",
        indication: "German AI Engineering",
        region: "Berlin, Germany",
        productCategory: "AI Hardware",
        giRegistry: "DE-GI-2024-001",
        certifyingBody: "German Tech Board",
        qualityStandards: "QS-2024-DE",
        producerAssociations: ["GAIA", "DE-AI-Consortium"],
        qualityReports: ["QR2024-B1", "QR2024-B2"],
        authorizedProducers: ["BerlinAI GmbH", "NeuralSystems AG"]
      },
      {
        id: "GI002",
        indication: "Tokyo AI Solutions",
        region: "Tokyo, Japan",
        productCategory: "AI Software",
        giRegistry: "JP-GI-2024-001",
        certifyingBody: "Japan Tech Standards",
        qualityStandards: "QS-2024-JP",
        producerAssociations: ["TAIA", "JAIA"],
        qualityReports: ["QR2024-T1", "QR2024-T2"],
        authorizedProducers: ["TokyoAI Corp.", "NipponTech Ltd."]
      },
      {
        id: "GI003",
        indication: "Swiss Blockchain Security",
        region: "Zug, Switzerland",
        productCategory: "Blockchain Solutions",
        giRegistry: "CH-GI-2024-001",
        certifyingBody: "Swiss Tech Authority",
        qualityStandards: "QS-2024-CH",
        producerAssociations: ["SBSA", "ZASA"],
        qualityReports: ["QR2024-S1", "QR2024-S2"],
        authorizedProducers: ["SwissCrypto AG", "ZugTech GmbH"]
      }
    ],
    softwareLicenses: [
      {
        id: "SL001",
        softwareName: "Quantum Sim Pro",
        licenseType: "Proprietary",
        issueDate: "2024-06-01",
        expirationDate: "2026-06-01",
        licensedTo: ["TechCorp Inc.", "QuantumX Labs"],
        restrictions: ["Non-transferable", "Single-user license"],
        relatedPatents: ["PAT001", "PAT004"]
      },
      {
        id: "SL002",
        softwareName: "AI Optimization Suite",
        licenseType: "Open Source",
        issueDate: "2024-06-10",
        expirationDate: "2029-06-10",
        licensedTo: ["Global Research Labs", "OpenAI Consortium"],
        restrictions: ["GPL v3", "Attribution required"],
        relatedPatents: ["PAT005", "PAT006"]
      },
    ],
    domainNames: [
      {
        id: "DN001",
        domain: "quantumtech.com",
        registrar: "Global Domains Inc.",
        registrationDate: "2023-12-20",
        expirationDate: "2025-12-20",
        status: "Active",
        relatedTrademarks: ["TM001"]
      },
      {
        id: "DN002",
        domain: "ai-solutions.org",
        registrar: "Tech Domains Ltd.",
        registrationDate: "2024-01-15",
        expirationDate: "2026-01-15",
        status: "Active",
        relatedTrademarks: ["TM002"]
      }
    ]
  };
  