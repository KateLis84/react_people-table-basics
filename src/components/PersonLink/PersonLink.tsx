import { Person } from '../../types';

export const PersonLink = ({
  name,
  people,
}: {
  name: string;
  people: Person[];
}) => {
  const person = people.find(p => p.name === name);

  if (!name) {
    return <>-</>;
  }

  if (!person) {
    return <>{name}</>;
  }

  return (
    <a
      href={`#/people/${person.slug}`}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
    >
      {person.name}
    </a>
  );
};
