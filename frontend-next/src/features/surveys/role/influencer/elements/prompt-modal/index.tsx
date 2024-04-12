import React from 'react';
import { Modal } from 'components/custom';
import { DeleteInfluencerModalMain } from 'features/discover-influencers/role/admin/elements/delete-influencer-modal/styles';
import { Button } from 'components/ui';
import { capitalizeString } from 'utilities/string-converter';
import { TPromptInfluencerModalProps } from './types';

const PromptModal = ({
  onClose,
  handleAction,
  type = 'decline',
  target = 'campaign',
  ...props
}: TPromptInfluencerModalProps) => {
  const action = type;

  const termMapping = {
    campaign: 'campaign',
    survey: 'survey',
  };

  const entity = termMapping[target];

  return (
    <Modal
      size="small"
      title={`${capitalizeString(action)} ${capitalizeString(entity)} `}
      actions={[
        <Button
          color="default"
          variant="contained"
          size="large"
          onClick={onClose}
        >
          No
        </Button>,
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => {
            handleAction().then(() => {
              onClose();
            });
          }}
        >
          Yes
        </Button>,
      ]}
      onClose={onClose}
      {...props}
    >
      <DeleteInfluencerModalMain>
        Are you sure that you want to {action.toLowerCase()} selected {entity}?{' '}
        <br /> Operation cannot be undone.
      </DeleteInfluencerModalMain>
    </Modal>
  );
};

export default PromptModal;
