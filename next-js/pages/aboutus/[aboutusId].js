import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function DetailPage() {
  const router = useRouter();
  const aboutusId = parseInt(router.query.aboutusId);

  const member = details.find((member) => member.id === aboutusId);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <h1>Member not found</h1>
      )}
    </div>
  );
}

export default DetailPage;
