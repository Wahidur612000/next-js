import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function DetailPage() {
  const router = useRouter();
  const aboutusId = parseInt(router.query.aboutusId);

  const developer = details.find((developer) => developer.id === aboutusId);

  return (
    <div>
      {developer ? (
        <div>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </div>
      ) : (
        <h1>Developer not found</h1>
      )}
    </div>
  );
}

export default DetailPage;
