import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Field,
    Input,
    Transition,
    TransitionChild
} from '@headlessui/react'
import {FiStar, FiX} from "react-icons/fi";
import {useEffect, useState} from "react";
import moment from "moment";
import clsx from "clsx";

function AllScores({isOpen, setIsOpen, scores}) {
    const [filteredScores, setFilteredScores] = useState([]);
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        executeFilters();
    }, [filterValue, scores]);

    const executeFilters = () => {
        const scoresWithPlace = scores.map((score, index) => ({...score, place: index + 1}));
        let filtered = [];
        if (filterValue === '') {
            filtered = scoresWithPlace;
        } else {
            filtered = scoresWithPlace.filter(score => score.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
        setFilteredScores(filtered);
    }

    const getStar = (place) => {
        switch (place) {
            case 1:
                return <FiStar className="text-amber-300 fill-amber-300 inline mr-2" size={20}/>;
            case 2:
                return <FiStar className="text-gray-300 fill-gray-300 inline mr-2" size={20}/>;
            case 3:
                return <FiStar className="text-amber-700 fill-amber-700 inline mr-2" size={20}/>;
            default:
                return <></>;
        }
    }

    return (
        <Transition appear show={isOpen}>
            <Dialog as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 z-10 w-screen h-screen">
                    <div className="flex h-full items-center justify-center p-6">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel
                                className="w-full h-full rounded-xl bg-gyropurple/60 p-6 backdrop-blur-3xl relative">
                                <div className="absolute right-3 top-3">
                                    <Button
                                        className="text-gyroblue/50 hover:text-white transition-all text-2xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <FiX/>
                                    </Button>
                                </div>
                                <div className="h-full overflow-y-auto">
                                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                        Gyro scores Level 1
                                    </DialogTitle>
                                    <p className="mt-2 text-sm/6 text-white/50 mb-4">
                                        The below scores are from Level 1 of the Gyro game.
                                    </p>
                                    <div className="h-full">
                                        <Field className="mb-4">
                                            <Input
                                                className={clsx(
                                                    'mt-3 block w-full border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gyroblue'
                                                )}
                                                placeholder="Filter by name"
                                                value={filterValue}
                                                onChange={e => setFilterValue(e.target.value)}
                                            />
                                        </Field>
                                        <div className="h-full">
                                            <table
                                                className="w-full text-left text-gyroblue rtl:text-right border-gyroblue border-2">
                                                <thead
                                                    className="text-gyroblue uppercase border-gyroblue border-b-2">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Position
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Time
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Achieved at
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                {
                                                    filteredScores.length === 0 &&
                                                    <tr>
                                                        <td colSpan={4} className="text-center py-4">
                                                            No scores found
                                                        </td>
                                                    </tr>
                                                }
                                                {
                                                    filteredScores.length > 0 && filteredScores.map((score) => (
                                                            <tr className="border-b-2 border-gyroblue">
                                                                <th scope="row"
                                                                    className="px-6 py-4">
                                                                    {
                                                                        score.place &&
                                                                        <>
                                                                            {getStar(score.place)}
                                                                            {score.place}
                                                                        </>
                                                                    }
                                                                </th>
                                                                <td className="px-6 py-4">
                                                                    {score.name || 'No score'}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {score.timeTaken != null ? moment.utc(score.timeTaken).format("mm:ss.SSS") : "??:??.???"}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {score.createdAt != null ? moment(score.createdAt).format("HH:mm") : "??:??"}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default AllScores;