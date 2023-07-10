import { gql, useMutation } from '@apollo/client';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';

const CREATE_BATTLE_ATTEMPT_MUTATION = gql`
  mutation CreateBattleAttemptMutation($user: ID!, $battle: ID!) {
    createBattleAttemptForBattle(user: $user, battle: $battle) {
      id
    }
  }
`;

const StartBattle = ({ user, battle, location }) => {
  const [createBattleAttempt] = useMutation(CREATE_BATTLE_ATTEMPT_MUTATION, {
    variables: {
      user,
      battle,
    },
  });

  const navigate = useNavigate();

  return (
    <Button
      onClick={async () => {
        const { data } = await createBattleAttempt();

        navigate(`/game/attempt/${data.createBattleAttemptForBattle.id}`, { state: { from: location } });
      }}
    >
      Battle
    </Button>
  );
};

export default StartBattle;
