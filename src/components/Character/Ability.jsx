import { DocumentRenderer } from '@keystone-6/document-renderer';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Ability(props) {
  const { name, description } = props;
  return (
    <Dialog>
      <DialogTrigger>Ability {props.index + 1}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            <DocumentRenderer document={description.document} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
