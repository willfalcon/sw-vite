import { Card, CardContent, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/Progress';
import classNames from 'classnames';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { FaClockRotateLeft, FaHeart } from 'react-icons/fa6';

export default function CharacterCard({ character, className, health, turnMeter, reverse = false }) {
  return (
    <Card className={classNames(className, 'flex w-full')}>
      <div className={reverse ? 'order-2' : ''}>
        <Avatar className="h-10 w-10">
          <AvatarImage src={character.avatar.url} />
        </Avatar>
      </div>
      <div className={classNames('flex-1', reverse ? 'order-1' : '')}>
        <div className="space-y-1.5 px-6 py-3">
          <CardTitle className="text-ellipsis line-clamp-1">{character.name}</CardTitle>
        </div>
        <CardContent>
          <Separator />
          <div className="flex mt-4 items-center gap-2">
            <FaHeart />
            <Progress value={health} />
          </div>
          <div className="flex mt-4 items-center gap-2">
            <FaClockRotateLeft />
            <Progress value={turnMeter} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
