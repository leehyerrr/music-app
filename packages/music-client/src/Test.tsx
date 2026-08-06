import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

const Test = ({
  isReadOnly = true,
  cc,
}: {
  isReadOnly: boolean;
  cc: ReactNode;
}) => {
  return (
    <div>
      {/* {isValidElement(cc)
        ? cloneElement(cc as ReactElement, {
            readOnly: isReadOnly,
          } )
        : cc} */}

      {isValidElement(cc)
        ? cloneElement(cc as ReactElement<{ readOnly?: boolean }>, {
            readOnly: isReadOnly,
          })
        : cc}
      <span>안뇽</span>
      <input type="text" readOnly={isReadOnly} />
    </div>
  );
};

export default Test;
