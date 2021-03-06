Resume = new Mongo.Collection('resume');

resumeData = [
    {
        "jobNum": 1,
        "title": "Software Development Manager",
        "company": "HDR, Inc.",
        "dates": "4/2010 - Present",
        "description": "Manage staff, in-house and outsourced, organized as both agile and traditional, delivering an SaaS service portfolio and managing projects for developing custom business solutions. Oversee operations for consulting group, leading a team of multi-platform developers. Communicate with potential clients to identify business needs and evaluate appropriate applications of technology. Plan, direct, and monitor all aspects of large multi-discipline projects with high degree of technical complexity. Responsible for multiple concurrent projects for a broad range of clients. Develop and maintain team budgets and resource allocations across all projects.  Provide guidance on strategic technology policy and perform assessments to enhance operations.",
        "accomplishments": [
            "Led the development of a public outreach comment collection template, deployed as a mobile-first SaaS web application that allowed collection of custom data within hours. Usage of the template resulted in a 90% decrease in ramp-up costs for comment collection services.",
            "Led the development of an interactive map-based logistical preparedness application for an oil-spill containment group that enables the automation of response plans. The application provides first responders a platform to organize required inventory quicker, resulting in overall time savings of several days for spill events.",
            "Managed the development of an SaaS real property management solution for the Customs and Border Protection division of the U.S. Department of Homeland Security that saved hundreds of hours of integration time by providing templates for an internal asset management solution. ",
            "Optimized the data management and quality assurance processes for legislative reporting within the Oregon Department of Transportation's (ODOT) State Radio Project, resulting in a 50% reduction in turnaround costs for monthly deliverables, saving the agency hundreds of thousands of dollars over the course of the program.",
            "Managed the development of a GIS-based ledger tool for environmental mitigation banking that allows agencies to record mitigation activities. The tool was turned into a template that can be deployed with a very short turnaround."
        ]
    },
    {
        "jobNum": 2,
        "title": "Project Manager",
        "company": "HDR, Inc.",
        "dates": "4/2009 - 4/2010",
        "description": "Act as the product owner, communicating with clients to identify business needs and evaluate appropriate solutions. Maintain stewardship of the client business needs and challenges. Plan, direct, and monitor all aspects of large multi-discipline projects, agile and non-, with high degree of technical complexity. Responsible for multiple concurrent projects for a broad range of clients and agencies. Develop and maintain team budgets and resource allocations across all projects",
        "accomplishments": [
            "Introduced agile methodologies into team practices resulting in 50% faster project turnaround and a higher degree of satisfaction in client engagements.",
            "Virtualized development resources to cloud-based solution resulting in a 50% decrease in infrastructure costs, increased scalability, and expanding potential market penetration.",
            "Implemented comprehensive defect tracking and source control systems that resulted in 100% faster turnaround of issues and greater control of product development cycle. ",
            "Established the base transparency model for a custom centralized reporting application compliant with the Federal Office of Management and Budget (OMB) guidelines for the American Recovery and Reinvestment Act (ARRA) that includes a dynamic ad-hoc reporting GIS services to visualize the path of stimulus funds. The central reporting platform was utilized by the State of Oregon for the entirety of the ARRA reporting requirements."
        ]
    },
    {
        "jobNum": 3,
        "title": "Enterprise Systems Architect",
        "company": "Oregon Bridge Delivery Partners",
        "dates": "5/2004 - 4/2009",
        "description": "Responsible for enterprise technical operational strategy. Establish and implement policies for resource usage. Develop standards and best practices for systems architecture, implementation, and process. Design, capture, and analyze performance metrics for demand, capacity, and overall infrastructure utilization. Advise executive management on the benefits and risks of technology implementation and change. Work with clients, vendors, and technical consultants both internally and externally. Conducts reviews of the enterprise environment to proactively address potential problem areas.",
        "accomplishments": [
            "Co-developed and implemented enterprise level network topology for spin-off joint venture company.",
            "Developed multiple policies to direct technology service usage throughout the enterprise.",
            "Implemented numerous measures to decrease risk of loss due to unlicensed software. ",
            "Introduced security measures to reduce potential cyber threat."
        ]
    },
    {
        "jobNum": 4,
        "title": "Senior Systems Technician",
        "company": "Oregon State Legislative Assembly",
        "dates": "9/1998 - 5/2004",
        "description": "Provides top-tier support and advanced system troubleshooting for a broad range of software and hardware systems and applications. Design, install, configure, and maintain enterprise network infrastructure and manages performance and security of all systems. Provide technical information to management and staff on the optimal utilization of network capabilities. Recommend ways to utilize appropriate technologies to maximize future benefits. Administers security measures to restrict unauthorized use of network systems and data. Provide assistance and mentoring to junior technical staff.",
        "accomplishments": [
            "Responsible for numerous large scale multi-phase technology deployments."
        ]
    }
];

buls = [
    "A Software Development Manager with 20 years of program & project management experience that is recognized as an innovative leader, fostering creative solutions, motivating team members, and expertly balancing technical needs with business value.",
    "Leads a consulting group of multi-platform developers and technologists, in-house and outsourced, creating custom solutions for challenging business needs.",
    "Manage the product development, process development, and maintenance lifecycles for custom solutions as well as established platforms.",
    "Provides guidance on strategic technology policy and assesses existing operations to identify potential efficiencies.",
    "Collaborate with business leaders, potential clients, and technology partners to identify, prioritize, and create a path to implementing business needs.",
    "Build, grow, and coach staff to create high-performance teams.",
    "Developed a public involvement toolkit, deployed as a mobile-first MongoDB/Node.js application that allowed collection of custom data within hours. Usage of the template resulted in a 90% decrease in ramp-up costs for comment collection services and provided a framework for sentiment analysis for any public campaign.",
    "Developed an AngularJS interactive map-based logistical preparedness application for an oil-spill containment group that enables the automation of response plans.",
    "The application provided first responders a platform to organize required inventory quicker, resulting in overall time savings of several days for spill events, potentially saving millions of dollars in environmental cleanup.",
    "Developed a SaaS ASP.NET real property management solution for the Customs and Border Protection division of the U.S. Department of Homeland Security that saved hundreds of hours of integration time by providing templates for an internal asset management solution.",
    "Optimized and automated the data management and quality assurance processes for legislative reporting within the Oregon Department of Transportation’s (ODOT) State Radio Project, resulting in a 50% reduction in turnaround costs for monthly deliverables, saving the agency hundreds of thousands of dollars over the course of the program.",
    "Managed the development of a GIS-based ledger tool for environmental mitigation banking that allows agencies to record mitigation activities.",
    "The tool was turned into a template that can be deployed with a very short turnaround.",
    "Act as the product owner, communicating with clients to identify business needs and evaluate appropriate solutions.",
    "Maintain stewardship of the client business needs and challenges.",
    "Plan, direct, and monitor all aspects of large multi-discipline projects, agile and non-, with high degree of technical complexity.",
    "Responsible for multiple concurrent projects for a broad range of clients and agencies. Develop and maintain team budgets and resource allocations across all projects.",
    "Introduced agile methodologies into team practices resulting in 50% faster project turnaround and a higher degree of satisfaction in client engagements.",
    "Virtualized development resources to cloud-based solution resulting in a 50% decrease in infrastructure costs, increased scalability, and expanding potential market penetration.",
    "Implemented comprehensive defect tracking and source control systems that resulted in 100% faster turnaround of issues and greater control of product development cycle.",
    "Spearheaded the development of a custom SaaS reporting application compliant with the Federal Office of Management and Budget (OMB) guidelines for the American Recovery and Reinvestment Act (ARRA) that includes a dynamic ad hoc reporting and GIS services to visualize the path of stimulus funds.",
    "Establish a startup joint-venture enterprise network architecture and supporting applications for delivery of program goals",
    "Build and develop a technical team for support and maintenance of the program.",
    "Responsible for enterprise technology strategy and establishing policies for technical resource usage by developing standards and best practices for systems, architecture, implementation, and development.",
    "Develop performance metrics for demand, capacity, and utilization and advise executives on the benefits and risks of technology strategic goals.",
    "Co-developed and implemented enterprise level network topology for spin-off joint venture company including Windows Server architectures, Cisco topologies, SQL database farms, FileNet P8 document management systems, and a number of custom in-house developed applications and integrations for various business needs.",
    "Developed multiple policies to direct technology service usage throughout the enterprise.",
    "Assemble and recruit team of technology professionals to carry forward the mission of the business.",
    "Implemented numerous measures to decrease risk of loss due to unlicensed software.",
    "Introduced security measures to reduce potential cyber threat.",
    "Provided top-tier support and advanced system troubleshooting for a broad range of software and hardware systems and applications.",
    "Design, install, configure, and maintain enterprise network infrastructure and managed performance and security of all systems.",
    "Provided technical information to management and staff on the optimal utilization of network capabilities.",
    "Recommend ways to utilize appropriate technologies to maximize future benefits.",
    "Responsible for numerous large-scale multi-phase technology deployments.",
    "Tasked with maintaining ship and company military supply stores; responsibilities include open-purchase, inventory, screen, procure, receive, store and issue material, and replace repair selected components.",
    "Manage inventories and issuance of repair parts, general supplies, and specialized hazardous materials.",
    "Utilize financial accounting and database systems to perform inventory and financial management functions."
];





