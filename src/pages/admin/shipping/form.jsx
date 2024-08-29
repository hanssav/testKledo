import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CoverLayout from '../../../helpers/admin/components/CoverLayout'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from '../../../helpers/admin/components/Modal'

function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const user = useSelector((state) => state.auth.value.data.data)
  const navigate = useNavigate()
  const token = user.access_token
  const { id } = useParams()
  const numericId = parseInt(id, 10)

  useEffect(() => {
    if (numericId) {
      const fetchData = async () => {
        try {
          setLoading(true)
          const response = await axios.get('https://api.jokolodang.com/api/v1/finance/shippingComps', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })

          const filteredData = response.data.data.filter(item => item.id === numericId)
          const fetchedData = filteredData.length ? filteredData[0] : null

          if (fetchedData) {
            setData(fetchedData)
            reset({ name: fetchedData.name })
          }
        } catch (error) {
          setError(error.message || 'Error fetching data')
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [numericId, token, reset])

  const onSubmit = async (data) => {
    setLoading(true)
    setError('')

    try {
      if (numericId) {
        await axios.put(
          `https://api.jokolodang.com/api/v1/finance/shippingComps/${numericId}`,
          { name: data.name },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )
      } else {
        await axios.post(
          'https://api.jokolodang.com/api/v1/finance/shippingComps',
          { name: data.name },
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        )
      }

      navigate('/shipping-comps')
    } catch (error) {
      setError(error.message || 'Error saving shipping company')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!id) return

    try {
      setLoading(true)
      setError('')

      await axios.delete(`https://api.jokolodang.com/api/v1/finance/shippingComps/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      navigate('/shipping-comps')
    } catch (error) {
      setError(error.message || 'Error deleting shipping company')
    } finally {
      setLoading(false)
      setIsModalOpen(false)
    }
  }

  return (
    <CoverLayout>
      <div className="flex flex-col">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold">{`${id ? 'Edit' : 'Tambah'} Shipping Comps`}</h2>
          {id && (
            <button
              onClick={() => setIsModalOpen(true)} 
              className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 flex items-center mx-4"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 max-w-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Nama
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Nama harus di isi' })}
              className={`border border-gray-300 rounded-lg p-2 w-full ${
                errors.name ? 'border-red-500' : ''
              }`}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-48 mt-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Simpan...' : 'Simpan'}
          </button>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </form>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} 
          onConfirm={handleDelete} 
          message="Apakah Anda Yakin Menghapus ini?"
        />
      </div>
    </CoverLayout>
  )
}

export default Form
