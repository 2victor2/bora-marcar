import {
  Container,
  ContainerHeader,
  TabButton,
  EventTitle,
  Content,
  MainButton,
} from "./styles";

import { FaClipboardList, FaUserFriends } from "react-icons/fa";

import { useState } from "react";

import ProductList from "../../components/productList";
import GuestList from "../../components/guestList";
import Modal from "@mui/material/Modal";
import FormAddItem from "../../components/formAddItem";
import FormAddGuest from "../../components/formAddGuest";
import ModalConfirmEvent from "../../components/modalConfirmEvent";
import LogoHeader from "../../assets/Logos/Logo-Header.svg";
import { useEvents } from "../../provider/Events";
import { useItemsList } from "../../provider/ItemsList";
import { useGuests } from "../../provider/Guests";
import FormEditItem from "../../components/formEditItem";

const DashboardEvents = () => {
  const [productsTab, setProductsTab] = useState(true);
  const switchTabs = () => setProductsTab(!productsTab);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openFormGuest, setOpenFormGuest] = useState(false);
  const handleOpenFormGuest = () => setOpenFormGuest(true);
  const handleCloseFormGuest = () => setOpenFormGuest(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);
  const handleOpenModalConfirm = () => setOpenModalConfirm(true);
  const handleCloseModalConfirm = () => setOpenModalConfirm(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const handleOpenEditForm = () => setOpenEditForm(true);
  const handleCloseEditForm = () => setOpenEditForm(false);
  const { activeEvent } = useEvents();
  const { handleLetsMake, itemsList } = useItemsList();
  const { guests } = useGuests();
  const [itemID, setItemID] = useState(0)

  const handleClickLetsMake = () => {
    if (itemsList.length > 0 && guests.length > 0) {
      handleLetsMake();
      handleOpenModalConfirm();
    }
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <Container>
        <ContainerHeader>
          <TabButton active={productsTab} onClick={() => switchTabs()}>
            <p>
              <FaClipboardList />
            </p>
          </TabButton>
          <TabButton active={!productsTab} onClick={() => switchTabs()}>
            <p>
              <FaUserFriends />
            </p>
          </TabButton>
        </ContainerHeader>
        <EventTitle children={activeEvent.name} />
        <Content
          children={
            productsTab ? (
              <ProductList
                handleOpen={handleOpen}
                handleOpenEditForm={handleOpenEditForm}
                setItemID={setItemID}
              />
            ) : (
              <GuestList handleOpenFormGuest={handleOpenFormGuest} />
            )
          }
        />
        <MainButton
          onClick={() => handleClickLetsMake()}
          children={<img src={LogoHeader} alt="Bora Marcar?"></img>}
        />
        <Modal open={open} onClose={handleClose} sx={style}>
          <>
            <FormAddItem handleClose={handleClose} />
          </>
        </Modal>
        <Modal open={openFormGuest} onClose={handleCloseFormGuest} sx={style}>
          <>
            <FormAddGuest handleCloseFormGuest={handleCloseFormGuest} />
          </>
        </Modal>
        <Modal
          open={openModalConfirm}
          onClose={handleCloseModalConfirm}
          sx={style}
        >
          <>
            <ModalConfirmEvent />
          </>
        </Modal>
        <Modal open={openEditForm} onClose={handleCloseEditForm} sx={style}>
          <>
            <FormEditItem handleClose={handleCloseEditForm} itemID={itemID}/>
          </>
        </Modal>
      </Container>
    </>
  );
};

export default DashboardEvents;
