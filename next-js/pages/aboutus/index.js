// pages/aboutus/index.js
import { Fragment } from "react";
import Link from "next/link";

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutUsPage() {
  return (
    <Fragment>
      <h1>The about us page</h1>
      <ul>
        {details.map((member) => (
          <li key={member.id}>
            <Link href={`/aboutus/${member.id}`}>
              {member.name} - {member.role}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutUsPage;
