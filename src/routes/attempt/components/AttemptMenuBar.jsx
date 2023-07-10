import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { gql, useMutation } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';

const DELETE_BATTLE_ATTEMPT = gql`
  mutation DeleteBattleAttempt($battle: ID!) {
    deleteBattleAttemptForBattle(battle: $battle)
  }
`;

export default function AttemptMenuBar({ battleId }) {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/game';

  const [deleteAttempt] = useMutation(DELETE_BATTLE_ATTEMPT, {
    variables: {
      battle: battleId,
    },
  });

  return (
    <AlertDialog>
      <div className="h-10 px-4 bg-white border-b flex items-center justify-end space-x-4 lg:space-x-6 fixed w-full top-0">
        <AlertDialogTrigger>Forfeit Battle</AlertDialogTrigger>
      </div>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to forfeit?</AlertDialogTitle>
          <AlertDialogDescription>You will lose all progress for this battle and no rewards will be given.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              const { data } = await deleteAttempt();
              if (data.deleteBattleAttemptForBattle) {
                navigate(from, { replace: true });
              } else {
                throw Error('Something went wrong');
              }
            }}
          >
            Forfeit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
