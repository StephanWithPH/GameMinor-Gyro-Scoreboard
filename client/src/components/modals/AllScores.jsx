import {Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {FiX} from "react-icons/fi";

function AllScores({isOpen, setIsOpen}) {
    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto">
                    <div className="flex h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full h-full rounded-xl bg-white/5 p-6 backdrop-blur-2xl relative">
                                <div className="absolute right-3 top-3">
                                    <Button
                                        className="text-gyroblue/50 hover:text-white transition-all text-2xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FiX/>
                                    </Button>
                                </div>
                                <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                    Gyro scores Level 1
                                </DialogTitle>
                                <p className="mt-2 text-sm/6 text-white/50">
                                    The below scores are from Level 1 of the Gyro game.
                                </p>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default AllScores;