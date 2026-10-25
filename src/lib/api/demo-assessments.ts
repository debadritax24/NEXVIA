export interface Question { prompt: string; choices: string[]; answer: number; explanation: string }
export const demoAssessments: Record<string, { title: string; questions: Question[] }> = {
  a1: { title: "React Fundamentals", questions: [
    { prompt: "Which hook stores local component state?", choices: ["useState", "useRef", "useContext"], answer: 0, explanation: "useState stores a value and provides a setter that requests a render." },
    { prompt: "What should identify each item in a rendered list?", choices: ["A random value each render", "A stable key from the data", "The current time"], answer: 1, explanation: "Stable keys help React preserve the identity of list items." },
    { prompt: "How should an array in state be updated?", choices: ["Mutate it directly", "Change its length", "Create a new array and use the setter"], answer: 2, explanation: "Treat state as immutable and pass the new array to the setter." },
  ] },
  a2: { title: "TypeScript Proficiency", questions: [
    { prompt: "Which type requires narrowing before arbitrary operations?", choices: ["any", "unknown", "never"], answer: 1, explanation: "unknown requires checking the value before using type-specific operations." },
    { prompt: "What does string | number describe?", choices: ["A union", "An array", "A function"], answer: 0, explanation: "The value can be either a string or a number." },
    { prompt: "Do TypeScript types validate incoming JSON at runtime?", choices: ["Always", "Only in strict mode", "No, runtime validation is needed"], answer: 2, explanation: "Types are erased; external data still needs runtime validation." },
  ] },
  a3: { title: "Node.js & Express", questions: [
    { prompt: "Which HTTP method normally retrieves a resource?", choices: ["GET", "DELETE", "PATCH"], answer: 0, explanation: "GET retrieves a representation of a resource." },
    { prompt: "Which status typically indicates a missing resource?", choices: ["200", "404", "201"], answer: 1, explanation: "404 means the resource was not found." },
    { prompt: "Where should API secrets be stored?", choices: ["In browser code", "In a public repository", "In protected server configuration"], answer: 2, explanation: "Secrets belong in protected server configuration, never in client bundles." },
  ] },
  a4: { title: "AWS Cloud Basics", questions: [
    { prompt: "What is the principle of least privilege?", choices: ["Grant all permissions", "Grant only needed permissions", "Share administrator credentials"], answer: 1, explanation: "Grant only the permissions needed for a task." },
    { prompt: "What does scaling horizontally mean?", choices: ["Adding instances", "Increasing one machine's memory", "Disabling backups"], answer: 0, explanation: "Horizontal scaling adds instances to distribute work." },
    { prompt: "What helps recover after data loss?", choices: ["Deleting logs", "Using one copy", "Tested backups"], answer: 2, explanation: "Backups and tested restoration procedures support recovery." },
  ] },
};
