
export const systemdesign = [
    {
      id: 401,
      question: "What does horizontal scaling mean?",
      options: ["More CPU to a server", "More servers", "More RAM", "More storage"],
      correctAnswer: "More servers",
    },
    {
      id: 402,
      question: "What distributes traffic across servers?",
      options: ["Database", "Load Balancer", "API Gateway", "Cache"],
      correctAnswer: "Load Balancer",
    },
    {
      id: 403,
      question: "What improves read performance?",
      options: ["Database", "Cache", "Queue", "Load Balancer"],
      correctAnswer: "Cache",
    },
    {
      id: 404,
      question: "Which database is best for large scale analytics?",
      options: ["SQL", "NoSQL", "Data Warehouse", "Graph DB"],
      correctAnswer: "Data Warehouse",
    },
    {
      id: 405,
      question: "What is sharding?",
      options: ["Caching data", "Splitting database into parts", "Replicating servers", "Encrypting data"],
      correctAnswer: "Splitting database into parts",
    },
    {
      id: 406,
      question: "Which system stores logs?",
      options: ["Redis", "Kafka", "ELK Stack", "MongoDB"],
      correctAnswer: "ELK Stack",
    },
    {
      id: 407,
      question: "What is a CDN used for?",
      options: ["Storing code", "Delivering static content fast", "Scaling writes", "Load balancing"],
      correctAnswer: "Delivering static content fast",
    },
    {
      id: 408,
      question: "What is replication?",
      options: ["Deleting data", "Copying data to multiple servers", "Encrypting data", "Splitting servers"],
      correctAnswer: "Copying data to multiple servers",
    },
    {
      id: 409,
      question: "What ensures high availability?",
      options: ["Single server", "Multi-region redundancy", "One database", "One cache"],
      correctAnswer: "Multi-region redundancy",
    },
    {
      id: 410,
      question: "What is rate limiting used for?",
      options: ["Reducing server size", "Controlling API traffic", "Adding new servers", "Scaling DB"],
      correctAnswer: "Controlling API traffic",
    },
  ]


export const oops = [
    {
      id: 501,
      question: "Which OOP concept hides internal details?",
      options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
      correctAnswer: "Abstraction",
    },
    {
      id: 502,
      question: "Which OOP concept binds data and methods together?",
      options: ["Encapsulation", "Abstraction", "Polymorphism", "Aggregation"],
      correctAnswer: "Encapsulation",
    },
    {
      id: 503,
      question: "Which concept allows multiple forms?",
      options: ["Abstraction", "Inheritance", "Polymorphism", "Composition"],
      correctAnswer: "Polymorphism",
    },
    {
      id: 504,
      question: "Which allows a class to acquire another class’s properties?",
      options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
      correctAnswer: "Inheritance",
    },
    {
      id: 505,
      question: "Which keyword prevents overriding?",
      options: ["static", "final", "sealed", "const"],
      correctAnswer: "final",
    },
    {
      id: 506,
      question: "What is method overriding?",
      options: ["Same name, same class", "Same name, different class", "Same parameters", "Static method"],
      correctAnswer: "Same name, different class",
    },
    {
      id: 507,
      question: "Constructor overloading means?",
      options: ["Multiple constructors", "One constructor", "Static constructors", "Final constructors"],
      correctAnswer: "Multiple constructors",
    },
    {
      id: 508,
      question: "Which class cannot be instantiated?",
      options: ["Super class", "Final class", "Abstract class", "Static class"],
      correctAnswer: "Abstract class",
    },
    {
      id: 509,
      question: "Which relationship is described as 'part of'?",
      options: ["Composition", "Aggregation", "Inheritance", "Interface"],
      correctAnswer: "Composition",
    },
    {
      id: 510,
      question: "Which access modifier is most restrictive?",
      options: ["protected", "private", "public", "default"],
      correctAnswer: "private",
    },
  ]

export const os = [
    {
      id: 301,
      question: "Which scheduling algorithm uses time slices?",
      options: ["FCFS", "SJF", "Priority", "Round Robin"],
      correctAnswer: "Round Robin",
    },
    {
      id: 302,
      question: "What is a deadlock?",
      options: [
        "Memory overflow",
        "CPU overheating",
        "Two processes waiting for each other",
        "Disk full",
      ],
      correctAnswer: "Two processes waiting for each other",
    },
    {
      id: 303,
      question: "Which is NOT an OS?",
      options: ["Windows", "Linux", "Oracle", "macOS"],
      correctAnswer: "Oracle",
    },
    {
      id: 304,
      question: "What is thrashing?",
      options: ["High CPU usage", "Excessive paging", "Network flooding", "Disk formatting"],
      correctAnswer: "Excessive paging",
    },
    {
      id: 305,
      question: "Which memory is fastest?",
      options: ["RAM", "Cache", "Hard Disk", "SSD"],
      correctAnswer: "Cache",
    },
    {
      id: 306,
      question: "What does CPU scheduling decide?",
      options: ["Which process runs next", "Memory allocation", "Disk partition", "File names"],
      correctAnswer: "Which process runs next",
    },
    {
      id: 307,
      question: "Which file system is used by Windows?",
      options: ["EXT4", "APFS", "NTFS", "FAT32"],
      correctAnswer: "NTFS",
    },
    {
      id: 308,
      question: "What is context switching?",
      options: [
        "Switching users",
        "Saving and restoring process state",
        "Formatting disk",
        "Copying processes"
      ],
      correctAnswer: "Saving and restoring process state",
    },
    {
      id: 309,
      question: "Which algorithm avoids deadlock?",
      options: ["Banker's algorithm", "Round Robin", "FIFO", "LRU"],
      correctAnswer: "Banker's algorithm",
    },
    {
      id: 310,
      question: "What is virtual memory?",
      options: [
        "Secondary memory",
        "Memory extension using disk",
        "GPU memory",
        "Cloud storage"
      ],
      correctAnswer: "Memory extension using disk",
    },
  ]

export const dbms =[
    {
      id: 201,
      question: "Which normal form removes partial dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      correctAnswer: "2NF",
    },
    {
      id: 202,
      question: "What does ACID stand for?",
      options: [
        "Atomicity Consistency Isolation Durability",
        "Array Column Integrity Data",
        "Access Control ID",
        "Atomic Control ID",
      ],
      correctAnswer: "Atomicity Consistency Isolation Durability",
    },
    {
      id: 203,
      question: "Which command deletes a table?",
      options: ["DELETE", "REMOVE", "DROP", "ERASE"],
      correctAnswer: "DROP",
    },
    {
      id: 204,
      question: "What is a primary key?",
      options: ["Unique identifier", "Foreign key", "Null key", "Duplicate value"],
      correctAnswer: "Unique identifier",
    },
    {
      id: 205,
      question: "Which join returns only matching rows?",
      options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
      correctAnswer: "INNER JOIN",
    },
    {
      id: 206,
      question: "Which is a non-relational database?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
      correctAnswer: "MongoDB",
    },
    {
      id: 207,
      question: "Which constraint ensures unique values?",
      options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "UNIQUE"],
      correctAnswer: "UNIQUE",
    },
    {
      id: 208,
      question: "Which language is used to query data?",
      options: ["DDL", "DCL", "DML", "HTML"],
      correctAnswer: "DML",
    },
    {
      id: 209,
      question: "Which SQL clause filters rows?",
      options: ["WHERE", "HAVING", "SELECT", "FROM"],
      correctAnswer: "WHERE",
    },
    {
      id: 210,
      question: "What is normalization?",
      options: ["Removing redundancy", "Adding redundancy", "Sorting data", "Encrypting data"],
      correctAnswer: "Removing redundancy",
    },
  ]

export const java = [
    {
      id: 101,
      question: "Which keyword is used for inheritance?",
      options: ["inherits", "extends", "implement", "super"],
      correctAnswer: "extends",
    },
    {
      id: 102,
      question: "What is JVM?",
      options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Model", "Java Version Manager"],
      correctAnswer: "Java Virtual Machine",
    },
    {
      id: 103,
      question: "Entry point of Java program?",
      options: ["main()", "start()", "run()", "execute()"],
      correctAnswer: "main()",
    },
    {
      id: 104,
      question: "Which OOP concept allows multiple methods with the same name?",
      options: ["Polymorphism", "Encapsulation", "Abstraction", "Overloading"],
      correctAnswer: "Overloading",
    },
    {
      id: 105,
      question: "Which keyword prevents inheritance?",
      options: ["private", "static", "sealed", "final"],
      correctAnswer: "final",
    },
    {
      id: 106,
      question: "Which operator is used for object comparison?",
      options: ["equals()", "==", "===", "!=",],
      correctAnswer: "equals()",
    },
    {
      id: 107,
      question: "Which collection does NOT allow duplicates?",
      options: ["List", "Set", "ArrayList", "Vector"],
      correctAnswer: "Set",
    },
    {
      id: 108,
      question: "Which concept binds code and data together?",
      options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
      correctAnswer: "Encapsulation",
    },
    {
      id: 109,
      question: "Which keyword allocates memory for an object?",
      options: ["malloc", "alloc", "new", "create"],
      correctAnswer: "new",
    },
    {
      id: 110,
      question: "Which is NOT a Java primitive type?",
      options: ["int", "float", "boolean", "String"],
      correctAnswer: "String",
    },
  ]

export const javascript = [
    {
      id: 1,
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "static", "define"],
      correctAnswer: "let",
    },
    {
      id: 2,
      question: "What is the result of typeof null?",
      options: ["null", "object", "undefined", "string"],
      correctAnswer: "object",
    },
    {
      id: 3,
      question: "Which method converts JSON text into a JavaScript object?",
      options: ["JSON.parse()", "JSON.from()", "JSON.stringify()", "Object.parse()"],
      correctAnswer: "JSON.parse()",
    },
    {
      id: 4,
      question: "Which operator is used for strict equality?",
      options: ["==", "===", "=", "!=="],
      correctAnswer: "===",
    },
    {
      id: 5,
      question: "What does NaN stand for?",
      options: ["Not a Number", "Negative and Null", "New Array Number", "None at Node"],
      correctAnswer: "Not a Number",
    },
    {
      id: 6,
      question: "Which of these is NOT a JavaScript data type?",
      options: ["Number", "Boolean", "Float", "Undefined"],
      correctAnswer: "Float",
    },
    {
      id: 7,
      question: "What is the default value of an uninitialized variable?",
      options: ["null", "undefined", "0", "empty"],
      correctAnswer: "undefined",
    },
    {
      id: 8,
      question: "Which loop runs at least once?",
      options: ["for", "while", "do-while", "for-of"],
      correctAnswer: "do-while",
    },
    {
      id: 9,
      question: "What is a callback?",
      options: [
        "A function passed into another function",
        "A type of loop",
        "A variable scope",
        "A JS library",
      ],
      correctAnswer: "A function passed into another function",
    },
    {
      id: 10,
      question: "Which of these is used to create a promise?",
      options: ["new Promise()", "Promise.create()", "makePromise()", "Promise.new()"],
      correctAnswer: "new Promise()",
    },
  ]