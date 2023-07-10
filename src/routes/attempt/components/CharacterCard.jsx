import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import classNames from 'classnames';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaClockRotateLeft, FaHeart } from 'react-icons/fa6';
import { useAttemptContext } from './attemptContext';

export default function CharacterCard({ character, className, rawHealth, maxHealth, turnMeter, reverse = false, toast = false }) {
  const { damageToast } = useAttemptContext();
  const health = (rawHealth / maxHealth) * 100;
  return (
    <Card className={classNames(className, 'flex w-full')}>
      <div className={reverse ? 'order-2' : ''}>
        <Avatar className="h-10 w-10">
          {/* <AvatarImage src={character.avatar.url} /> */}
          <AvatarFallback className="bg-natural-500" />
        </Avatar>
        {toast && (
          <div>
            {damageToast.crit && <span className="text-red-500 font-bold">Crit</span>}
            <span className="text-red-500 font-bold">-{damageToast.damage}</span>
          </div>
        )}
      </div>
      <div className={classNames('flex-1', reverse ? 'order-1' : '')}>
        <div className="space-y-1.5 px-6 py-3">
          <CardTitle className="text-ellipsis line-clamp-1">{character.name}</CardTitle>
        </div>
        <CardContent>
          <Separator />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex mt-4 items-center gap-2 w-full">
                <FaHeart />
                <Progress value={health} />
              </TooltipTrigger>
              <TooltipContent>
                <span>
                  {rawHealth}/{maxHealth}
                </span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger className="flex mt-4 items-center gap-2 w-full">
                <FaClockRotateLeft />
                <Progress value={turnMeter} />
              </TooltipTrigger>
              <TooltipContent>
                <span>{turnMeter}%</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </div>
    </Card>
  );
}
